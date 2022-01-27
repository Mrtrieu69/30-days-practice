

function Validator(options){
    var selectorRules = []

    var formEl = document.querySelector(options.form)

    function validate(inputEl, rules){
        var errorEl = inputEl.parentElement.querySelector(options.errorSelector)
        var errorMessage 

        for (let index = 0; index < rules.length; index++) {
            errorMessage = rules[index](inputEl.value.trim())
            if(errorMessage) break
        }

        if(errorMessage){
            errorEl.innerHTML = errorMessage
            inputEl.parentElement.classList.add("error")
        }

        return !!errorMessage
    }

    if(formEl){
        formEl.onsubmit = (e) =>{
            e.preventDefault()
            var isError
            options.rules.forEach(rule =>{
                var inputEl = formEl.querySelector(rule.selector)
                isError = validate(inputEl, selectorRules[rule.selector])

            })
            if(!isError){
                var inputs = formEl.querySelectorAll("[name]:not([disabled])")
                var data = Array.from(inputs).reduce((values, input) => {
                    return Object.assign({...values}, {[input.name]: input.value})
                }, {})
                console.log(options.onSubmit(data))
            }
        }

        options.rules.forEach((rule) => {
            var inputEl = formEl.querySelector(rule.selector)
            var errorEl = inputEl.parentElement.querySelector(options.errorSelector)

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test]
            }

            if(inputEl){
                inputEl.onblur = () => {
                    validate(inputEl, selectorRules[rule.selector])
                }

                inputEl.oninput = () => {
                    errorEl.innerHTML = ""
                    inputEl.parentElement.classList.remove("error")
                }
            }
        })
    }

}


Validator.isRequired = function(selector) {
    return{
        selector,
        test(value){
            return value ? undefined : "Khong duoc de trong"
        }
    }
}

Validator.isEmail = function(selector) {
    return{
        selector,
        test(value){
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(value) ? undefined : "Email khong chinh xac"
        }
    }
}

Validator.isMinLength = function(selector, min){
    return{
        selector,
        test: function(value){
            return value.length >= min ? undefined : `Mat khau chua toi thieu ${min} ky tu`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue){
    return{
        selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : "Gia tri nhap vao khong chinh xac"
        }
    }
}