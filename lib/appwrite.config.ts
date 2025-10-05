import * as sdk from 'node-appwrite'
 export const {
    PROJECT_ID, DATABASE_ID, API_KEY, PATIENT, DOCTOR, APPOINTMENT, 
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_APPWRITE_ENDPOINT: ENDPOINT,


} = process.env

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!)

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)

