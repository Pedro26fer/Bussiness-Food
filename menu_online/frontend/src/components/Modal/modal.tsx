import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivModal } from "./styles";
import { IoMdCloseCircle } from "react-icons/io";

type Props = {
  postOrUpdate: boolean;
  isVisible: boolean;
  setIsVisible: (boll: boolean) => void;
  id?: string;
};

function Modal({ postOrUpdate = true, isVisible, setIsVisible, id }: Props) {
  const [categories, setCategories] = useState<[{ name: string; id: string }]>([
    { name: "teste", id: "" },
  ]);
  const token = localStorage.getItem("token");

  const postSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    price: yup.string().required("Price is required"),
    qty: yup.number().required("This field is required"),
    photo: yup.string().optional(),
    categories: yup.array().of(yup.string()),
  });

  const updateSchema = yup.object().shape({
    name: yup.string().optional(),
    price: yup.string().optional(),
    qty: yup.number().optional(),
    photo: yup.string().optional(),
    categories: yup.array().of(yup.string()),
  });

  const chooseSchema = postOrUpdate ? postSchema : updateSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(chooseSchema),
  });

  const queryClient = useQueryClient();
  const postProduct = async (data: any) => {
    try {
      await axios.post(`http://localhost:3000/product`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product register");
      queryClient.invalidateQueries("getProducts");
      setIsVisible(false);
    } catch (error) {
      toast.error("Failed to register this product");
    }
  };

  const updateProduct = async (data: any) => {
    try {
      await axios.patch(`http://localhost:3000/product/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product updated");
      queryClient.invalidateQueries("getProducts");
      setIsVisible(false);
    } catch (error) {
      toast.error("Failed to update this product");
    }
  };

  const getCategories = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3000/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      toast.error("Failed to loading the categories");
    }
  };

  const key2 = ["getCategories"];
  const {} = useQuery(key2, async () => {
    await getCategories();
  });

  const key = ["postProduct"];
  const {} = useQuery(key, postProduct, {
    enabled: false,
  });

  const key3 = ["updateProduct"];
  const {} = useQuery(key3, updateProduct, {
    enabled: false,
  });

  const onSubmiting = postOrUpdate ? postProduct : updateProduct;

  return (
    <DivModal isVisible={isVisible}>
      <main>
        <IoMdCloseCircle
          id="close"
          size={30}
          onClick={() => setIsVisible(false)}
        />
        <h3>{postOrUpdate ? "Adding Product" : "Editing Product"}</h3>
        <form onSubmit={handleSubmit(onSubmiting)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name")}
          />

          <label htmlFor="price">Price</label>
          <input
            type="string"
            id="price"
            placeholder="$$$"
            {...register("price")}
          />

          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            id="qty"
            placeholder="How Many?"
            {...register("qty")}
          />

          <label htmlFor="photo">Image</label>
          <input
            type="string"
            id="photo"
            placeholder="Take a Picture"
            {...register("photo")}
          />

          <h3>Categories</h3>
          <section>
            {categories ? (
              categories.map((ctg) => (
                <>
                  <label htmlFor={ctg.id} id={ctg.name}>
                    {ctg.name}
                  </label>
                  <input
                    id={ctg.id}
                    type="checkbox"
                    value={ctg.name}
                    {...register("categories")}
                  />
                </>
              ))
            ) : (
              <span>loading</span>
            )}
          </section>
          <button type="submit">{postOrUpdate ? "Add" : "Edit"}</button>
        </form>
      </main>
    </DivModal>
  );
}

export default Modal;
