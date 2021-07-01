name_of_the_student_arrays= [];
function submit() {
var display_student_array=[];

for (var j =1; j<=4; j++ ){
var name_of_the_student_=document.getElementById("name_of_the_student_"+j).value;
console.log(name_of_the_student_);
name_of_the_student_arrays.push(name_of_the_student_);
}
console.log(name_of_the_student_arrays);
var length_of_the_student_array=name_of_the_student_arrays.length;
console.log(length_of_the_student_array);
for (var k=0;k  < length_of_the_student_array; k++){
display_student_array.push("<h4>Name-"+ name_of_the_student_arrays[k]+"</h4>");
console.log(display_student_array);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"

}

function sorting() {
name_of_the_student_arrays.sort();

var display_name_of_the_student_array_sorting=[];

var length_of_name_of_the_student_array=name_of_the_student_arrays.length;

for (var k=0;k  < length_of_name_of_the_student_array; k++) {
    display_name_of_the_student_array_sorting.push("<h4>Name-"+ name_of_the_student_arrays[k]+"</h4>")
}
var remove_commas=display_name_of_the_student_array_sorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("display_name_with_commas").innerHTML=display_name_of_the_student_array_sorting;
}
