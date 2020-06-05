class Sorter {
    order: SortOrder;
    property: string;
}

enum SortOrder {
    "asc", "desc"
}

export {Sorter, SortOrder}