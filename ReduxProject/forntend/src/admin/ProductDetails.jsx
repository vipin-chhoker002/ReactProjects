
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  asyncDeleteProducts,
  asyncUpdateProducts,
} from "../store/action/Productaction";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const { Products, loading } = useSelector(
    (state) => state.ProductReducer
  );

  const userdata = useSelector(
    (state) => state.userReducer.userdata
  );

  const product = Products.find(
    (item) => String(item.id) === String(id)
  );

  const isAdmin = userdata?.isAdmin === true;

  const {
    register,
    reset,
    handleSubmit,
  } = useForm();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [5, -5]),
    { stiffness: 120, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-5, 5]),
    { stiffness: 120, damping: 20 }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-300, 300], [-12, 12]),
    { stiffness: 100, damping: 20 }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-300, 300], [-12, 12]),
    { stiffness: 100, damping: 20 }
  );

  useEffect(() => {
    if (!product) return;

    reset({
      id: product.id,
      tittle: product.tittle,
      disc: product.disc,
      category: product.category,
      Image: product.Image,
    });
  }, [product, reset]);

  const handleMouseMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      event.clientX - (rect.left + rect.width / 2)
    );

    mouseY.set(
      event.clientY - (rect.top + rect.height / 2)
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const updateProductHandler = (data) => {
    dispatch(asyncUpdateProducts(id, data));
    reset();
    navigate("/Products");
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProducts(id));
    navigate("/Products");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070707]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-12 w-12 rounded-full border-2 border-white/10 border-t-white"
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070707] px-5 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold">
            Product Not Found
          </h2>

          <p className="mt-3 text-white/40">
            This product doesn't exist or has been removed.
          </p>

          <button
            onClick={() => navigate("/Products")}
            className="mt-7 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Back to Products
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] text-white">

      <motion.div
        animate={{
          x: [0, 100, -60, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 70, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <section className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/Products")}
          className="mb-10 flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <span>←</span>
          Products
        </motion.button>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/40"
        >

          <motion.div
            style={{
              x: mouseX,
              y: mouseY,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl"
          />

          <div className="grid lg:grid-cols-2">

            <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-gradient-to-br from-white/[0.06] to-transparent p-8 lg:min-h-[650px]">

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"
              />

              <motion.div
                style={{
                  x: imageX,
                  y: imageY,
                }}
                className="relative z-10"
              >
                <motion.img
                  src={product.Image}
                  alt={product.tittle}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.7,
                    },
                    scale: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="h-[380px] w-[380px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] sm:h-[480px] sm:w-[480px]"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-white/[0.08]"
              />

              <div className="absolute bottom-6 left-7 text-[10px] uppercase tracking-[0.3em] text-white/20">
                Product / {String(product.id).slice(-6)}
              </div>
            </div>

            <div className="relative z-30 flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {product.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="mt-7 text-4xl font-semibold capitalize leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                {product.tittle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                }}
                className="mt-6 max-w-xl text-base leading-8 text-white/40 sm:text-lg"
              >
                {product.disc}
              </motion.p>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: "100%",
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="my-8 h-px bg-white/10"
              />

              <div className="grid grid-cols-2 gap-4">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Category
                  </p>

                  <p className="mt-2 capitalize text-white/80">
                    {product.category}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Product ID
                  </p>

                  <p className="mt-2 truncate text-white/80">
                    {product.id}
                  </p>
                </motion.div>

              </div>

              <motion.button
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 50px rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative mt-8 overflow-hidden rounded-2xl bg-white py-4 font-semibold text-black"
              >
                <motion.span
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"
                />

                <span className="relative flex items-center justify-center gap-3">
                  Add to Cart
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

            </div>
          </div>
        </motion.div>
      </section>

      {isAdmin && (
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative border-t border-white/10 bg-black/20 px-5 py-16 sm:px-8"
        >
          <div className="mx-auto max-w-3xl">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Administration
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Product Management
              </h2>

              <p className="mt-2 text-white/35">
                Update or remove this product.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit(updateProductHandler)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >

              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Title
                </label>

                <input
                  {...register("tittle", { required: true })}
                  type="text"
                  placeholder="Product title"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Product ID
                </label>

                <input
                  {...register("id", { required: true })}
                  type="text"
                  placeholder="Product ID"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Description
                </label>

                <textarea
                  {...register("disc", { required: true })}
                  rows={4}
                  placeholder="Product description"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Category
                </label>

                <input
                  {...register("category", { required: true })}
                  type="text"
                  placeholder="Category"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Image URL
                </label>

                <input
                  {...register("Image")}
                  type="url"
                  placeholder="Image URL"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-white/30 focus:bg-white/[0.07]"
                />
              </div>

              <div className="grid gap-4 pt-3 sm:grid-cols-2">

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-white py-3.5 font-semibold text-black"
                >
                  Save Changes
                </motion.button>

                <motion.button
                  type="button"
                  onClick={deleteHandler}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border border-red-500/20 bg-red-500/5 py-3.5 font-semibold text-red-400 transition hover:bg-red-500/10"
                >
                  Delete Product
                </motion.button>

              </div>

            </motion.form>
          </div>
        </motion.section>
      )}
    </main>
  );
}

export default ProductDetails;

