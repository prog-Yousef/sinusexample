
function sendResponse(products) {
    return {
        statusCode: 200,
     headers: {
         'content-type': 'application/json',
     },
        body: JSON.stringify({
            products,
        }),
    };
}

function  sendError(statusCode, message) {
    return {
        statusCode: statusCode, 
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            message,
        }),
    };
}  


module.exports = { sendResponse, sendError };