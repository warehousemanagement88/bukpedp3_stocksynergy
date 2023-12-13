package gcf

import (
	"fmt"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/warehousemanagement88/be_warehouse/module"
)

func init() {
	functions.HTTP("warehouse", warehouse_signup)
}

func warehouse_signup(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers for the preflight request
	if r.Method == http.MethodOptions {
		w.Header().Set("Access-Control-Allow-Origin", "http://stocksynergy.my.id")
		w.Header().Set("Access-Control-Allow-Methods", "POST")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type,Authorization,Token")
		w.Header().Set("Access-Control-Max-Age", "3600")
		w.WriteHeader(http.StatusNoContent)
		return
	}
	// Set CORS headers for the main request.
	w.Header().Set("Access-Control-Allow-Origin", "http://stocksynergy.my.id")
	fmt.Fprintf(w, module.GCFHandlerSignUpStaff("MONGOSTRING", "warehouse_db", r))

}