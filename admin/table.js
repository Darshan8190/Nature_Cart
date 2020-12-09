//FIREBASE
var config = {
    apiKey: "AIzaSyArwANUb0dfry7j0vq7XeBRyAOv0FsdOeA",
    authDomain: "organicstore-c6e54.firebaseapp.com",
    databaseURL: "https://organicstore-c6e54.firebaseio.com",
    projectId: "organicstore-c6e54",
    storageBucket: "organicstore-c6e54.appspot.com",
    messagingSenderId: "6478703380"
  };
  firebase.initializeApp(config);
function renderTable(){
    var order= firebase.database().ref("order/");
    order.on("child_added",function(data){
        var orderValue =data.val();
        document.getElementById("table").innerHTML+=`
            <tr>
                <td> ${orderValue.id}</td>
                <td> ${orderValue.order}</td>
                <td> ${orderValue.total}</td>
            </tr>
        `;
    });
};