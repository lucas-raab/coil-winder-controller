(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var CoilWindingHMI;
        (function (CoilWindingHMI) {
            function getUser() {
                // Use TwinCAT API to get the current user
                var currentUser = TcHmi.Server.getCurrentUser();
                return currentUser ? currentUser.UserName : "";
            }
            CoilWindingHMI.getUser = getUser;
        })(CoilWindingHMI = Functions.CoilWindingHMI || (Functions.CoilWindingHMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('getUser', 'TcHmi.Functions.CoilWindingHMI', TcHmi.Functions.CoilWindingHMI.getUser);

