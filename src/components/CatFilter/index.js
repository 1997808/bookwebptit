import React from "react";

export default function CatFilter({
  allCategory,
  updateBookList,
  resetBookList,
}) {
  return (
    <div className="w-full">
      <div
        onClick={() => resetBookList()}
        className="border border-solid p-8 cursor-pointer"
      >
        <p className="text-xl font-medium pb-0.5">Danh mục</p>
      </div>
      <div className="border border-solid px-8 py-4">
        {allCategory &&
          allCategory.map((items) => {
            return (
              <p
                key={items.categoryID}
                onClick={() => {
                  updateBookList(items.categoryID);
                }}
                className="text-sm py-4 cursor-pointer"
              >
                {items.name}
              </p>
            );
          })}
      </div>
    </div>
  );
}
