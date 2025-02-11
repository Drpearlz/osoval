export interface Vote {
  id: string;
    name: string;
    guess: 'boy' | 'girl';
    timestamp: Date;
  }
  
  export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }