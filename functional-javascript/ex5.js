function checkUsersValid(goodUsers) {
  	return function allUsersValid(submittedUsers) {
    	var checkAllSubmitedUser = submittedUsers.every(function(submittedUsers){
			var checkSomeGoodUser = goodUsers.some(function(goodUsers){
				return goodUsers.id === submittedUsers.id;
			});
			return checkSomeGoodUser;
		});
		return checkAllSubmitedUser;
  	};
}
module.exports = checkUsersValid

/*

function checkUsersValid(goodUsers) {
   return function allUsersValid(submittedUsers) {
       
       var isSubmittedUserInGoodUsersArray = submittedUsers.map(function(submittedUser) {
           return goodUsers.some(function(element){
               return submittedUser.id === element.id;
           });
       });

       var isAllMatch = isSubmittedUserInGoodUsersArray.every(function(element){
           return element;
       })

       return isAllMatch;
   };
}
 
module.exports = checkUsersValid;

*/