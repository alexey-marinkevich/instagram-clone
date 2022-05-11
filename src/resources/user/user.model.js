import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const storySchema = new Schema({}, { timestamps: true }); // todo: fill storySchema

const storiesCollectionSchema = new Schema(
  {
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
      type: [storySchema],
      default: [],
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const userSchema = new Schema(
  {
    bio: {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      occupation: {
        type: String,
        default: '',
      },
      profileDescription: {
        type: [String],
        default: [''],
      },
    },
    posts: {
      type: [Schema.Types.ObjectId],
      ref: 'post',
      default: [],
    },
    followers: {
      type: [Schema.Types.ObjectId],
      ref: 'user',
      default: [],
    },
    following: {
      type: [Schema.Types.ObjectId],
      ref: 'user',
      default: [],
    },
    userCollections: {
      type: [Schema.Types.ObjectId],
      ref: 'userCollection', // todo: create separate userCollection
      default: [],
    },
    userStoryCollections: {
      type: [storiesCollectionSchema],
      default: [],
    },
  }, // todo: add conversations model later
  { timestamps: true },
);

const User = model('user', userSchema);

export default User;
