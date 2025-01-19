<script lang="ts" setup>
import {makeRules} from "@/composables/rules";
import {emailValidator} from "@/composables/rules/email";
import {minValidator} from "@/composables/rules/min";
import {signIn} from "@/composables/api/auth/signIn";
import {useToast} from "vue-toastification";
import {requiredValidator} from "@/composables/rules/required";

definePageMeta({
  layout: "blank",
});
const loading = ref(false);
const toast = useToast();
const formRef = ref();
const form = reactive({
  email: null,
  password: null,
  remember: false,
});
const rules = {
  email: [makeRules([requiredValidator, emailValidator])],
  password: [makeRules([requiredValidator, [minValidator, {length: 6}]])],
};
const submit = async () => {
  formRef.value.validate(async (errors) => {
    if (!errors) {
      loading.value = true;
      try {
        await signIn(form);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Validation failed");
    }
    loading.value = false;
  });
};
</script>
<template>
  <div class="flex items-center justify-center h-full">
    <NCard class="max-w-md my-8 rounded-xl">
      <h2 class="text-3xl font-semibold text-center mb-8">Sign In</h2>
      <NForm
          ref="formRef"
          v-model:model="form"
          v-model:rules="rules"
          @submit.prevent="submit"
      >
        <CoreAppInput v-model="form.email" label="Email" path="email"/>
        <CoreAppInput
            v-model="form.password"
            label="Password"
            path="password"
            type="password"
        />
        <div class="flex justify-between items-center mb-8">
          <n-form-item label-placement="right" path="remember">
            <n-checkbox v-model:checked="form.remember"
            >Remember me?
            </n-checkbox>
          </n-form-item>
          <router-link class="text-primary underline" to="/forgot-password"
          >Forgot password?
          </router-link>
        </div>
        <NButton
            :disabled="loading"
            :loading="loading"
            attr-type="submit"
            class="w-full"
            type="primary"
        >
          Submit
        </NButton>
        <div class="mt-4 text-center">
          Don't have an account?
          <router-link class="text-primary underline" to="/sign-up"
          >Sign Up
          </router-link>
        </div>
      </NForm>
    </NCard>
  </div>
</template>
