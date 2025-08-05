// import { getall } from "../db/index.js"

import { getAggregate } from "../db/index.js"

// import { getallpopulated } from "../db/index.js"


const getData=(query)=>{
// return getall()
// return getallpopulated("category")
const{title}=query
console.log("Query",query)
return getAggregate([
    // {
    //    $match:{
    //           title:{
    //             $in: [ "test 1", "test 2" ]
    //           }
    //    }
    // }
    {
      $facet:{
        "totalcount":[
          {$count:"total"}
        ]
      }
    }
])

}
export default getData