import {converter} from  "../src/converter.js";
let entry = {
    "rules": [{
        "name": "GD8",
        "output_file": "GD8.txt",
        "tags": {
            "node_name": "GD8",
            "nodeID": 8078,
            "peoples": [{
                "name": '张三',
                "age": 19,
            }, {
                "name": '李四',
                "age": 12,
            }]
        },
    }, {
        "name": "GD9",
        "output_file": "Node_Data.awl",
        "option": {
            "append": true
        },
        "tags": {
            "node_name": "GD9",
            "nodeID": 8079,
            "peoples": [{
                "name": '王五',
                "age": 19,
            }, {
                "name": '赵六',
                "age": 29,
            }]
        },
    }],
    template: `station: {{node_name}}
station ID: {{nodeID}}
people:
{{ #for people in peoples}}{{ #if people.age > 18  }}
* {{people.name}}
{{#endif}}{{ #endfor}}
`
}
console.log(converter(entry));