USERS_URL = '';

export function submitLogin(user) {
    return (dispatch) => {
        dispatch( {type: 'SUBMITTING'} );
        
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(user)
        };
    
        fetch(USERS_URL, configObj)
            .then(response => response.json())
            .then(user_obj => {
                return dispatch ({type: 'SET_USER', user_obj})
            });
    }

}

export function submitLogout() {
    return {
        type: 'RESET_USER'
    }
}