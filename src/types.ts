// src/types.ts
export interface TelexAPMData {
    event_name: string;
    message: string;
    status: string;
    timestamp: string;
    error_info?: any;
    event_data?: any;
    cpu_usage?: any;
    memory_usage?: any;
    heap_total?: number;
    heap_used?: number;
    external?: number;
  }
  