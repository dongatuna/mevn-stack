import {StringUtil} from '../../utilities/string-util'

export function index(req, res){
    const validation = validateIndex(req.body)

    if(!validation.isValid){
        return res.status(400).json({message: validation.message})
    }

    return res.status(204).json()
}

function validateIndex(body){
    let errors = ""

    if(StringUtil.isEmpty(body.username)){
        errors += 'Please enter your username'
    }

    if(StringUtil.isEmpty(body.password)){
        errors += 'Please enter your password'
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}