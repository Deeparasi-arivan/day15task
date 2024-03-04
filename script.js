// I will be creating 2 functions for label as well as the input fields

function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    //Ex:label_create("label","for","email","Email");
    //<label for="email">Email</label>
    
    function break_create(){
    var ele = document.createElement("br");
    return ele;
    }
    //break_create("br")
    //<br>
    function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var ele = document.createElement(tagname)
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    return ele;
    }
    //function create_button(tagname,attrname,attrvalue,content){
    //var ele = document.createElement(tagname);
    //ele.setAttribute(attrname,attrvalue);
    //ele.innerHTML=content;
    //return ele;
    
    //}
    
    
    
    function foo(){
        {
         var first = document.getElementById("firstname").value;
        console.log(`Firstname:${first}`)
        }
    
        {
        var middle = document.getElementById("middlename").value;
        console.log(`Middlename:${middle}`)
        }
        
        {
        var  last = document.getElementById("lastname").value;
        console.log(`lastname:${last}`)
        }
        
        {
        var email= document.getElementById("email").value;
        console.log(`email:${email}`)
        }
    
        {
    
        var password = document.getElementById("password").value;
        console.log(`password:${password}`)

        }

        var division1 = document.createElement("div");
         division1.innerHTML=`<div>firstname:${first}</div>
        <div> middlename:${middle} </div>
         <div>lastname:${last}</div>
         <div>email:${email}</div>
        <div> password:${password}`
        


         document.body.append(division1);


    
    }
    //inpute_create("input","type","email","id","email")
    //  <input type="email" id="Email"><br>
    //var email = label_create("label","for","email","Email");
    //var email_break = break_create()
    //var email_input = input_create("input","type","email","id","email");
    
    
    var first_lable= label_create("label","for","firstname","Firstname");
    var first_lable_break = break_create()
    var first_input = input_create("input","type","text","id","firstname");
    var first_input_break = break_create()
    
    var middle_lable= label_create("label","for","middlename","middlename");
    var middle_lable_break = break_create()
    var middle_input = input_create("input","type","text","id","middlename");
    var middle_input_break = break_create()
    
    
    var last_lable= label_create("label","for","lastname","lastname");
    var last_lable_break = break_create()
    var last_input = input_create("input","type","text","id","lastname");
    var lastname_input= break_create()
    
    
    var email= label_create("label","for","email","email");
    var email_break = break_create()
    var email_input = input_create("input","type","email","id","email");
    var email_input_break = break_create()
    
    
    var password_lable= label_create("label","for","password","password");
    var password_lable_break = break_create()
    var password_input = input_create("input","type","password","id","password");
    var password_input_break = break_create()
    
    //var butt =create_button("button","type","button","submit");
    var button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("onclick","foo()");
    button.innerHTML ="clickme";
    
    
    document.body.append(first_lable,first_lable_break,first_input,first_input_break,middle_lable,middle_lable_break,middle_input,middle_input_break,last_lable,last_lable_break,last_input,lastname_input,email,email_break,email_input,email_input_break,password_lable,password_lable_break,password_input,password_input_break,button);
    