import { get } from "../../core/api/get";
import { host } from "../../core/api/host";

export const metricsQuery = (payload, dataHost = host, getFn = get) => {
  const params = new URLSearchParams(payload).toString();
  return getFn(`${dataHost}/availability-data?${params}`)
}