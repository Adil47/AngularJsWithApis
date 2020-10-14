// JavaScript Document



var app=angular.module("StudentModule",[]);
app.controller("StudentController",function($scope,$http){
	
	$scope.Students=[];
	
	// =----------------- Fetch record from API
	function fetch()
	{
		$http.get("http://localhost:82/project/public/api/Students/getStudents")
		.then(function(response){
			$scope.Students=response.data;
		});
	}
	fetch()
	
	//------------------- Insert Student
	$scope.insert=function(){
		
		var obj={
			Id:"110",
			Name:$scope.Name,
			Phone:$scope.Phone,
			Email:$scope.Email,
			Password:$scope.Password};
		
		$scope.Students.push(obj);
	}
	
	
	//------------------- Delete Student
	$scope.delete=function(id){
		
		//$scope.Students.splice(index,1);
		
		
		$http.post("http://localhost:82/project/public/api/Students/delete",{Id:id})
		.then(function(res){
			alert(res.data.Response)
			fetch()
		});
		
	};

	//------------------- Edit Student
	$scope.isUpdate=false;
	var StudentId=-1;
	$scope.edit=function(index,id)
	{
		var obj=$scope.Students[index];
		$scope.Name=obj.Name;
		$scope.Phone=obj.Phone;
		$scope.Email=obj.Email;
		$scope.Password=obj.Password;
		
		StudentId=id;
		
		
		$scope.isUpdate=true
		
	}
	//------------------- Update Student
	
	$scope.update=function()
	{
		
		var obj={
			Id:StudentId,
			Name:$scope.Name,
			Phone:$scope.Phone,
			Email:$scope.Email,
			Password:$scope.Password
		};
		
		$http.post("http://localhost:82/project/public/api/Students/update",obj)
		.then(function(res){
				alert(res.data.Response)
				fetch()
		});
		
		
		
		
		
		$scope.Name=$scope.Phone=$scope.Email=$scope.Password="";
		 StudentId=-1;
		$scope.isUpdate=false;
	}
	
	
});





//
//
//		{Id:"101",Name:"ali",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"102",Name:"Malik",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"103",Name:"Qaswa",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"104",Name:"Shumaila",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"105",Name:"Areeba",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"106",Name:"Aeliya",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"107",Name:"Basil",Phone:"0321-2297360",Email:"ali@gmail.com",Password:"123"},
//		{Id:"108",Name:"Umair",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"109",Name:"ali",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"},
//		{Id:"110",Name:"ali",Phone:"0320-98651",Email:"ali@gmail.com",Password:"123"}
		
	


