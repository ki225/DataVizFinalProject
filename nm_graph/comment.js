function get_comment(){
    d3.json('nm_graph/db_server/db.json').then(
        comment_data=>{
            comment(comment_data)
        }
    )
    
}

function comment(comment_data)
{
    var comment1 = comment_data.records[3].comment
    console.log(comment1)
    var comment2 = comment_data.records[8].comment          
    console.log(comment2)
    var comment3 = comment_data.records[10].comment
    console.log(comment3)
    var comment4 = comment_data.records[12].comment
    console.log(comment4)
    var comment5 = comment_data.records[14].comment   
    console.log(comment5)
    var comment6 = comment_data.records[23].comment
    console.log(comment6)

    document.getElementById('comment1').innerHTML = comment1;
    document.getElementById('comment2').innerHTML = comment2;
    document.getElementById('comment3').innerHTML = comment3;
    document.getElementById('comment4').innerHTML = comment4; 
    document.getElementById('comment5').innerHTML = comment5;
    document.getElementById('comment6').innerHTML = comment6;
}