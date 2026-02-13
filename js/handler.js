

 document.getElementById('btn-title-change')
             .addEventListener('click', function(){
                const titleChange = document.getElementById('page-title');
                // console.log(titleChange);
                titleChange.innerText ='page title new'


             })

 document.getElementById('btn-log-in')
            .addEventListener('click', function(){
                const logInChanged = document.getElementById('message-paragraph');
                logInChanged.innerText = 'user legged in successfully';
            })