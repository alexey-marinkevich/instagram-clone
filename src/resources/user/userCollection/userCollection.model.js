import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userCollectionSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  headImage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  media: {
    type: [Schema.Types.ObjectId],
    ref: 'post',
    default: [],
  },
  isPrivate: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const UserCollection = model('user_collection', userCollectionSchema);

export default UserCollection;
