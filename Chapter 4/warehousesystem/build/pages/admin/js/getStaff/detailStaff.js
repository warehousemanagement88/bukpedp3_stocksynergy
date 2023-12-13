import { addInner } from "https://jscroot.github.io/element/croot.js";

export const dataStaff = `
<div
class="mx-auto mt-6 mb-6 p-4 max-w-md bg-gradient-to-tl from-purple-700 to-pink-500 border rounded-xl shadow-soft-xl"
>
<h6 class="text-white text-xl">Detail Staff</h6>
<div
  class="mx-auto mt-4 mb-4 w-64 bg-white rounded-lg overflow-hidden shadow-soft-md transition-transform duration-200 ease-in-out transform hover:scale-105"
>
  <div class="p-4">
    <p class="mb-2">
      <strong>Nama Lengkap : #NAMALENGKAP#</strong>
    </p>
    <p class="mb-2">
      <strong>Jabatan : #JABATAN#</strong>
    </p>
    <p class="mb-2">
      <strong>Jenis Kelamin : #JENISKELAMIN#</strong>
    </p>
    <a
      href="./staff.html"
      class="block px-2 py-1 mx-auto mt-4 font-bold text-white uppercase bg-gradient-to-tl from-gray-900 to-slate-800 rounded-lg text-center transition-all duration-200 ease-in hover:opacity-85 hover:scale-102 hover:shadow-soft-xs hover:bg-slate-700"
    >
      Cancel
    </a>
  </div>
</div>
</div>
`;

export function responseDataStaff(results) {
  console.log(results);
  isiRowStaff(results);
}

export function isiRowStaff(value) {
  const content = dataStaff
    .replace("#NAMALENGKAP#", value.namalengkap)
    .replace("#JABATAN#", value.jabatan)
    .replace("#JENISKELAMIN#", value.jeniskelamin);
  addInner("detailStaff", content);
}
