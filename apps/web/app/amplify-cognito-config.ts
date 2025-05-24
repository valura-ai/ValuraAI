"use client"

import {Amplify, type ResourcesConfig} from "aws-amplify";

export const authConf: ResourcesConfig["Auth"] = {
    Cognito:{
        userPoolId: String(process.env.NEXT_PUBLIC_USER_POOL_ID),
        userPoolClientId: String(process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID),
    },
};

Amplify.configure(
    {
        Auth: authConf,
    },
    {ssr: true}
);

export default function ConfAmplifyClient(){
    return null;
}