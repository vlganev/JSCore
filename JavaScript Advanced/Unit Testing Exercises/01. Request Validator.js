function validateRequest(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^([A-Za-z0-9.]+)|\*$/g;
    const messageRegex = /^[^<>\\&'"]+$/g;
    let properties = ['method', 'uri', 'version', 'message'];
    let mapPropertyToUpperFirstLetter = {
        method: 'Method',
        uri: 'URI',
        version: 'Version',
        message: 'Message'
    }
    let validate = {
        method: () => {
            if (!validMethods.includes(obj['method'])) {
                return false;
            }
            return true;
        },

        uri: () => {
            if (!uriRegex.test(obj['uri'])) {
                return false;
            }
            return true;
        },

        version: () => {
            if (!validVersions.includes(obj['version'])) {
                return false;
            }
            return true;
        },

        message: () => {
            if (uriRegex.test(obj['message'])) {
                return false;
            }
            return true;
        }
    }
    for (let property of properties) {
        if (!obj.hasOwnProperty(property) || !validate[property]()) {
            throw new Error(`Invalid request header: Invalid ${mapPropertyToUpperFirstLetter[property]}`);
        }
    }
    return(obj);
}
validateRequest({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
});