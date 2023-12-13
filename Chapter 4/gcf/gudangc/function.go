package gcf

import (
	"fmt"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/warehousemanagement88/be_warehouse/module"
)

func init() {
	functions.HTTP("warehouse", warehouse_gudangc)
}

func warehouse_gudangc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://stocksynergy.my.id")
	// Set CORS headers for the preflight request
	if r.Method == http.MethodOptions {
		w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type,Authorization,Token")
		w.Header().Set("Access-Control-Max-Age", "3600")
		w.WriteHeader(http.StatusNoContent)
		return
	}
	if r.Method == http.MethodPost {
		fmt.Fprintf(w, module.GCFHandlerInsertGudangC("PASETOPUBLICKEY", "MONGOSTRING", "warehouse_db", r))
		return
	}
	if r.Method == http.MethodPut {
		fmt.Fprintf(w, module.GCFHandlerUpdateGudangC("PASETOPUBLICKEY", "MONGOSTRING", "warehouse_db", r))
		return
	}
	if r.Method == http.MethodDelete {
		fmt.Fprintf(w, module.GCFHandlerDeleteGudangC("PASETOPUBLICKEY", "MONGOSTRING", "warehouse_db", r))
		return
	}
	// Set CORS headers for the main request.
	fmt.Fprintf(w, module.GCFHandlerGetGudangC("PASETOPUBLICKEY", "MONGOSTRING", "warehouse_db", r))
}