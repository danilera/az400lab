export default () => {
    let queryString    = window.location.search.split('?')[1],
        queryStringObj = {}

    if(queryString){
        queryString.split('&').forEach(item => {
            let arr = item.split('=')

            queryStringObj[ arr[0] ] = arr[1]
        })
    }

    return queryStringObj
}