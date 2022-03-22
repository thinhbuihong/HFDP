export class Singleton {
  private static uniqueInstance: Singleton;
  private constructor() {}

  public static getInstance() {
    if (this.uniqueInstance == null) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
}
