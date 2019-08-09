export class DemoService {

    FORM_SERVER_URL = "https://formspree.io/koshik.raj@gmail.com";


    requestDemo(data) {
        console.log(data);

        let promiseFunction = fetch(
            this.FORM_SERVER_URL,
            {
                method: 'POST',
                body: data,


            }).then(res => res.json())
            .then(function (response) {

                return response;
            }).catch(function (error) {
                console.log(error);
                return {ok: false, msg: error};
            });

        return promiseFunction;


    }




}

module.export = DemoService;
