
// $(document).ready(function(){
// var convertedIntoArray = [];
// $("table#details tr").each(function() {
//    var rowDataArray = [];
//    var actualData = $(this).find('td');
//    if (actualData.length > 0) {
//       actualData.each(function() {
//          rowDataArray.push($(this).text());
//       });
//       convertedIntoArray.push(rowDataArray);
//    }
// });
// console.table(convertedIntoArray);
// });

function createNewArray(length=4)
{
    var matrix=[];
    var arr=[];
    var randNumber;
    var randomNumbers=[];
    var flag=false;


    for(i=0;i<length;i++)
    {
        for(j=0;j<length;j++)
        {
            while(!flag)
            {
                randNumber=Math.floor(Math.random() * (length*length));
                var a = randomNumbers.includes(randNumber);
                console.log(a);
                if(!randomNumbers.includes(randNumber))
                {
                    arr.push(randNumber);
                    randomNumbers.push(randNumber);
                    flag=true;
                }
            }
            
            flag=false;

        }
        
        
        matrix.push(arr);
        arr=[];
        flag=false;

       
    }
    return matrix;
}

function createTable(length,arr)
{
    window.onload=function()
    {
        for(j=0;j<length;j++)
        {
            var tr = document.createElement("tr");
            for(i=0;i<length;i++)
            {
                var td= document.createElement("td");
                var square=document.createElement("div");
                square.className="square";
                if(arr[i][j]!=0)
                {
                    square.append(arr[i][j]);
                }
                square.id=arr[i][j];              
                square.addEventListener('click',function(){locationReplacement(this.id,arr,length);});
;                td.appendChild(square);
                tr.appendChild(td);
            }
            var element = document.getElementById('details');
            element.appendChild(tr);
        }
        console.log(element);   
    
    }
}
  

var arr = createNewArray(3);
createTable(3,arr);

function showAlert(event)
{
    alert("WOW");
}

function locationReplacement(number,arr,length)
{
    alert(number);
    
    for(i=0;i<length;i++)
    {
        for(j=0;j<length;j++)
        {
            console.log(arr[i][j]);
            console.log("i:"+i);
            console.log("j:"+j);
            console.log(number);

            if(arr[j][i]=== number && arr[j][i+1]===0)
            {
                var num = arr[j][i+1];
                arr[j][i+1] = number;
                arr[j][i]=num;
            }
            else if(arr[j][j]=== number && arr[i][j-1]===0)
            {
                var num = arr[i][j-1];
                arr[i][j-1] = number;
                arr[i][j]=num;
            }
            else if(arr[i][j]=== number && arr[i+1][j]===0)
            {
                var num = arr[i+1][j];
                arr[i+1][j] = number;
                arr[i][j]=num;
            }
            else if(arr[i][j]=== number && arr[i-1][j]===0)
            {
                var num = arr[i-1][j];
                arr[i-1][j] = number;
                arr[i][j]=num;
            }


        }
    }

    console.table(arr);



}


console.table(arr);

/*var arr=[
    [1,null,15,10],
    [13,2,7,4],
    [9,6,8,5],
    [3,12,11,14]
];


console.table(arr);*/

