package gcf

import (
	"fmt"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/warehousemanagement88/be_warehouse/module"
)

func init() {
	functions.HTTP("warehouse", warehouse_user)
}

func warehouse_user(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://stocksynergy.my.id")
	// Set CORS headers for the preflight request
	if r.Method == http.MethodOptions {
		w.Header().Set("Access-Control-Allow-Methods", "GET,PUT")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type,Authorization,Token")
		w.Header().Set("Access-Control-Max-Age", "3600")
		w.WriteHeader(http.StatusNoContent)
		return
	}
	if r.Method == http.MethodPut {
		fmt.Fprintf(w, module.GCFHandlerUpdateUser("PASETOPUBLICKEY", "MONGOSTRING", "warehouse_db", r))
		return
	}
	// Set CORS headers for the main request.
	fmt.Fprintf(w, module.GCFHandlerGetUser("PASETOPUBLICKEY", "MONGOSTRING", "warehouse_db", r))
}