

export class LoggerMessage {

    logerErrorMessage = (method: string, errorMessage: string) => `Error has just occured in method ${method} and message is ${errorMessage}`


    createObjectMessage = (createObject: string) =>`start create ${createObject}`


    successCreateMessage = (createObject: string) =>`${createObject} create with success`

    searchObjectMessage=(searchObject:string, method:string)=>`Start to search ${searchObject} in method ${method}`

    objectfoundMessage=(searchObject:string, method:string)=>`Found ${searchObject} in method ${method} with success`

    objectNotFound=(searchObject:string, method:string)=>`Not found ${searchObject} in method ${method}`

    updateObjectMessage=(method:string,objectUdate:string)=>`Successeful update ${objectUdate} in method ${method}`

}

