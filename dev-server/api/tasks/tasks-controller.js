export function index(req, res){
    //FIND ALL TASKS
    return res.status(200).json()
}

export function create(req, res){
    //CREATE A TASK
    return res.status(201).json()
}

export function update(req, res){
    //UPDATE A TASK
    return res.status(204).json()
}

export function remove(req, res){
    //REMOVE A TASK
    return res.status(204).json()
}

export function show(req, res){
    //SHOW A TASK
    return res.status(200).json()
}