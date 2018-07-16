

const postFrom = (opts, data) => {

    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    }


    axios.post(opts.url, param, config)
        .then(response => {
            console.log("111");
            if (response.data.code === 0) {
                console.log(response.data.data);
            }
            console.log(response.data)
    })
}