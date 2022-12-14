import { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import Webcam from 'react-webcam';

const initialState = {
  name: '',
  uid: '',
  pan: '',
  bankAccount: '',
  collegeCode: '',
  registrationNumber: '',
  email: '',
  image: '',
  photo: '',
};

const Form = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [data, setData] = useState<any>({});
  const [formData, setFormData] = useState(initialState);
  const [isVerifying, setIsVerifying] = useState('Verify');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [image, setImage] = useState('');
  const [isCaptured, setIsCaptured] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const capture = useCallback(() => {
    // @ts-ignore: Object is possibly 'null'.
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const submitImage = async () => {
    const response = await axios.post('/api/upload', {
      image: imgSrc,
    });
    if (response.status === 200) {
      setIsUploaded(true);
    }

    setImage(response.data.results.url);
  };

  const router = useRouter();

  const verifySubmitHandler = async (e: any) => {
    e.preventDefault();
    setIsVerifying('Verifying...');
    const resUid = await axios.get(`/api/aadhar/${formData.uid}`);

    const res = await axios.post('http://127.0.0.1:8080/face-auth', { userurl: image, aadharurl: resUid.data.photo });
    console.log(res);
    if (res.data.matched === true) {
      Swal.fire({
        title: 'Success',
        text: 'Image Matched',
        icon: 'success',
        confirmButtonText: 'OKAY',
      });
      setIsVerified(true);
      setIsVerifying('Verified');
    }
    else {
      setIsVerifying('Verify');
      Swal.fire({
        title: 'Error',
        text: 'Not Matched',
        icon: 'error',
        confirmButtonText: 'OKAY',
      });
    return;

    }

    const response = await axios.post('/api/verify', {
      uid: formData.uid,
      pan: formData.pan,
      bankAccount: formData.bankAccount,
    });
    console.log(response.data);

    if (response.data.status === 'success') {
      Swal.fire({
        title: 'Success',
        text: response.data?.message,
        icon: 'success',
        confirmButtonText: 'OKAY',
      });
      // setIsVerified(true);
      // setIsVerifying('Verified');

      // setData(response.data);
      // setLoading(false);

      // setFormValues(initialValues);
    } else {
      setIsVerifying('Verify');
      Swal.fire({
        title: 'Error',
        text: response.data?.message,
        icon: 'error',
        confirmButtonText: 'OKAY',
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post('/api/verifiedStudent', {
      ...formData,
      photo: image,
    });

    if (res.data.status === 'success') {
      setData(res.data.data);
      setIsLoading(false);
      setIsSubmit(true);
      enqueueSnackbar('Register Successfully!', {
        variant: 'success',
        autoHideDuration: 2000,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
      });
      router.push('/status');
    } else {
      setIsLoading(false);
      enqueueSnackbar('This Aadhar is aleady Used', {
        variant: 'error',
        autoHideDuration: 2000,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
      });
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const inputClass = 'border-2 outline-none w-full my-1 rounded-lg px-4 py-2';

  return (
    <div className="flex gap-12 items-center w-full my-6 justify-center">
      <div className="border flex flex-col justify-center items-center rounded-lg shadow-md pb-8 bg-white w-[32rem] md:w-96">
        <div className="py-4 px-8 flex items-center justify-between shadow-md w-full">
          <h4 className="text-center text-lg text-sky-500 font-medium">
            Register Your Self
          </h4>
          <a className="text-neutral-400 cursor-pointer">Need Help?</a>
        </div>
        <div className="flex gap-36 justify-between pt-4  mb-2">
          <a
            className={`text-neutral-500 cursor-pointer border-b-2 ${isStudent ? 'border-sky-500' : 'border-transparent'
              }`}
            onClick={() => setIsStudent(true)}
          >
            Student
          </a>
          <a
            className={`text-neutral-500 cursor-pointer border-b-2 ${!isStudent ? 'border-sky-500' : 'border-transparent'
              }`}
            onClick={() => setIsStudent(false)}
          >
            Faculty
          </a>
        </div>
        <form onSubmit={handleSubmit} className="w-[82%]">
          <div className="flex flex-col gap-2 justify-center my-3  w-full ">
            <label className="text-sm  ">
              {isStudent ? 'Student' : 'Faculty'} Name
            </label>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Enter name"
              value={formData.name}
              required
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">College Code</label>
            <input
              name="collegeCode"
              value={formData.collegeCode}
              required
              onChange={handleChange}
              placeholder="Enter College code"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Registration Number</label>
            <input
              name="registrationNumber"
              value={formData.registrationNumber}
              required
              onChange={handleChange}
              placeholder="Enter Registration Number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Email ID</label>
            <input
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              placeholder="Enter Email Address"
              className={`${inputClass}`}
            />
          </div>
          <button
            disabled={!isVerified}
            className="cursor-pointer w-full bg-sky-500 font-semibold rounded-md hover:bg-sky-700 text-center uppercase transition-all ease-linear text-white px-2 py-3 duration-75 disabled:bg-neutral-400 disabled:cursor-no-drop"
          >
            {isLoading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </div>
      <form onSubmit={verifySubmitHandler}>
        <div className="p-8 border flex flex-col justify-center items-center rounded-lg shadow-md pb-8 bg-white w-[32rem] md:w-96">
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Aadhar Number</label>
            <input
              name="uid"
              value={formData.uid}
              required
              onChange={handleChange}
              placeholder="Enter AADHAAR number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Pan Card Number</label>
            <input
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              placeholder="Enter Pan Card Number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm ">Account Number</label>
            <input
              name="bankAccount"
              value={formData.bankAccount}
              required
              onChange={handleChange}
              placeholder="Enter Account number"
              className={`${inputClass}`}
            />
          </div>
          <button
          disabled={isVerified}
          className="cursor-pointer w-full bg-green-500 font-semibold rounded-md hover:bg-green-700 text-center uppercase transition-all ease-linear text-white px-2 py-3 duration-75 disabled:bg-neutral-400 disabled:cursor-no-drop"
        >
          {isVerifying}
        </button>
        </div>
      </form>
      <div>
        {/* <WebcamCapture /> */}
        {!imgSrc && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        )}
        {imgSrc && <img src={imgSrc} />}
        <div className="flex justify-between w-full p-2">
          <button
            disabled={isCaptured}
            className="cursor-pointer bg-sky-500 text-sm font-medium rounded-md hover:bg-sky-700 text-center uppercase transition-all ease-linear text-white p-2 duration-75 disabled:bg-neutral-400 disabled:cursor-no-drop"
            onClick={() => {
              capture();
              setIsCaptured(true);
            }}
          >
            Capture
          </button>
          <button
            disabled={!isCaptured}
            className="cursor-pointer bg-green-500 text-sm font-medium rounded-md hover:bg-green-700 text-center uppercase transition-all ease-linear text-white p-2 duration-75 disabled:bg-neutral-400 disabled:cursor-no-drop"
            onClick={submitImage}
          >
            {isUploaded ? 'Uploaded' : 'Upload'}
          </button>
          <button
            disabled={!isCaptured}
            className="cursor-pointer bg-red-500 text-sm font-medium rounded-md hover:bg-red-700 text-center uppercase transition-all ease-linear text-white p-2 duration-75 disabled:bg-neutral-400 disabled:cursor-no-drop"
            onClick={() => {
              setImgSrc(null);
              setIsCaptured(false);
            }}
            color="red"
          >
            Reset
          </button>
        </div>
        
      </div>

    </div>
  );
};

export default Form;
