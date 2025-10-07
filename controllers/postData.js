import {data} from '../data.data,js'

export function postData(req, res){
    const newItem = req.body

    if(!newItem || Object.keys(newItem).length === 0){
        return res.status(400).json({message: "Invalid data. Please provide valid JSON data in the request body."})
    }

    data.push(newItem)

    res.status(201).json({
        message: 'Data added successfully',
        data: newItem
    })
}