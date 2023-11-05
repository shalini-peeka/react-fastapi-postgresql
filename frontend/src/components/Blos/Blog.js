import React from 'react'

const Blog = ({ onLogoutSuccess, token }) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer" + token);

    var formdata = new FormData();
    formdata.append("Authorization", "Bearer" + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("/api/blog/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    const logout = () => {
        localStorage.removeItem("accessToken")
        onLogoutSuccess()
    }
    return (
        <div style={{ alignItems: 'center', textAlign: 'center', display: 'block' }}>
            <div>Đây là Trang Blog</div>
            <button type='button' onClick={logout}> Logout</button>
        </div>
    )
}

export default Blog
