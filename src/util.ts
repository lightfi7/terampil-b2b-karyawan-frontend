import axios from "axios";
import moment from "moment";

export interface IPagination<T> {
  total: number
  data: T[]
}

export function openExcelBuffer(buffer: any, filename: string = new Date().getTime().toString()) {
  const blob = new Blob([buffer]);
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `${filename}.xlsx`;
  link.click();
}

export function trimSpecial(s: string, max: number = 20): string {
  return `${s.slice(0, max)}${s.length > max ? '...' : ''}`;
}

export function getMonthsToNowFrom(date: Date): Date[] {
  const now = moment();
  const process_date = moment(date);
  process_date.set('date', 1);
  process_date.set('hour', 0);
  process_date.set('minute', 0);
  process_date.set('second', 0);
  const list_date: Date[] = []
  while (process_date.isBefore(now, 'hour')) {
    list_date.push(process_date.toDate());
    process_date.add(1, 'month');
  }
  return list_date;
}

export async function uploadFile(file: any, _setLoading: (_: boolean) => void) {
  if (!file) {
    return;
  }
  _setLoading(true);
  try {
    const form_data = new FormData();
    form_data.append('file', file);
    const filename: string = (await axios.post('/upload', form_data)).data;
    return filename;
  } catch (err: any) {
    alert(err.response.data.toString());
  } finally {
    _setLoading(false);
  }
}
