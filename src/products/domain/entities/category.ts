export type CategoryCreateData = {
  name?: string;
};

type CategoryProps = {
  data: CategoryCreateData;
};

export class Category {
  id: number;
  name?: string;

  private constructor(props: CategoryProps) {
    this.id = -1;
    this.name = props.data.name;
  }

  static create(props: CategoryProps) {
    return new Category(props);
  }
}
