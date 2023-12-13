import { addInner } from "https://jscroot.github.io/element/croot.js";

export const URLGetStaff =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_user";

export const tableStaff = `
<tr>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#EMAIL#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#PASSWORD#</span>
</td>
<td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
  <span class="text-xs font-semibold leading-tight text-slate-400">#ROLE#</span>
</td>
<td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-center">
<a type="button" href="detail_staff.html?staffId=#DETAIL#" class="text-xs font-semibold leading-tight text-slate-400"> <i class="fas fa-info-circle"></i></a>
</button>
</tr>
`;

export function responseData(results) {
  console.log("Response data:", results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const staff = tableStaff
    .replace("#EMAIL#", value.email)
    .replace("#PASSWORD#", value.password)
    .replace("#ROLE#", value.role)
    .replace("#DETAIL#", value._id);
  addInner("tableStaff", staff);
}
