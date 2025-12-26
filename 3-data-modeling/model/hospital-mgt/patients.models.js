import mongoose from 'mongoose';

const patientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    digonedWith: {
      type: String,
      requird: true,
    },
    address: {
      type: String,
      requird: true,
    },
    age: {
      type: Number,
      requird: true,
    },
    bloodGrp: {
      type: String,
      requird: true,
    },
    Gender: {
      type: String,
      enum: ['F', 'M', 'O'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patients = mongoose.model('Patients', patientsSchema);
