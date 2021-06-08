$(document).ready(function(){
   $('.save_post_btn').on('click', function(e){
        e.preventDefault();
        let check = userHasUploadedImage();
        if(check)
        {
            let myForm = document.getElementById('addPostForm');
            let formData = new FormData(myForm);
        }
   });
});


// Validation for image 

function userHasUploadedImage()
{
    let check = true;
    let file = $("#image").get(0).files[0];
    if(file == undefined || file == null)
    {
        check = false;
        handleErrors();
        return check;
    }
    handleErrors();
    return check;
}

function handleErrors(){

    let file = $("#image").get(0).files[0];
    if(file == undefined || file == null)
    {
        $("#error_image").show();
    }else{
        $("#error_image").hide();
    }
}