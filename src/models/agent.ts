import { Schema, model, models } from 'mongoose';

const agentSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  collegeCode: {
    type: String,
  },
});

const AgentSchema = models.Agent || model('Agent', agentSchema);

export default AgentSchema;
