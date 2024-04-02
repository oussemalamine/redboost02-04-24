import * as XLSX from "xlsx"
import FileSaver from "file-saver"

export const handleExport = async (data, fileName, fileType, fileExtention) => {
  const ws = XLSX.utils.json_to_sheet(data)
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] }
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })
  const dataBlob = new Blob([excelBuffer], { type: fileType })
  FileSaver.saveAs(dataBlob, fileName + fileExtention)
}
