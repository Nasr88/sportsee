export class PerformanceModel {
    constructor(data, kind) {
      this.data = data;
      this.kind = kind;
    }
  
    static formatLabel(value) {
      switch (value) {
        case 'energy': return 'Energie';
        case 'strength': return 'Force';
        case 'speed': return 'Vitesse';
        case 'intensity': return 'Intensité';
        case 'endurance': return 'Endurance';
        case 'cardio': return 'Cardio';
        default: return value;
      }
    }
  
    transformData() {
      return this.data.map(val => {
        const stringkind = PerformanceModel.formatLabel(this.kind[val.kind]);
        return {
          ...val,
          stringkind
        };
      }).reverse();
    }
  }