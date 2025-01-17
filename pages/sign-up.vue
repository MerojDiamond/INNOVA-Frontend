<script lang="ts" setup>
import AppInput from "@/@core/components/AppInput.vue";
import { makeRules } from "@/composables/rules";
import { emailValidator } from "@/composables/rules/email";
import { minValidator } from "@/composables/rules/min";
import { requiredValidator } from "@/composables/rules/required";
import { useToast } from "vue-toastification";
import { signUp } from "@/composables/api/auth/signUp";

definePage({
  meta: {
    layout: "blank",
  },
});
const loading = ref(false);
const toast = useToast();
const formRef = ref();
const form = reactive({
  email: null,
  password: null,
  password_confirmation: null,
});

const rules = {
  email: [makeRules([requiredValidator, emailValidator])],
  password: [makeRules([requiredValidator, [minValidator, { length: 6 }]])],
  password_confirmation: [
    makeRules([requiredValidator, [minValidator, { length: 6 }]]),
  ],
};
const submit = async () => {
  formRef.value.validate(async (errors) => {
    if (!errors) {
      loading.value = true;
      await signUp(form);
      loading.value = false;
    } else {
      toast.error("Validation failed");
    }
  });
};
</script>
<template>
  <div class="flex items-center justify-center h-full">
    <NCard class="max-w-md my-8 rounded-xl">
      <h2 class="text-3xl font-semibold text-center mb-8">Sign Up</h2>
      <NForm
        ref="formRef"
        v-model:model="form"
        v-model:rules="rules"
        @submit.prevent="submit"
      >
        <AppInput v-model="form.email" label="Email" path="email" />
        <AppInput
          v-model="form.password"
          label="Password"
          path="password"
          type="password"
        />
        <AppInput
          v-model="form.password_confirmation"
          label="Confirm password"
          path="password_confirmation"
          type="password"
        />
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
          Already have an account?
          <router-link class="text-primary underline" to="/sign-in">
            Sign In
          </router-link>
        </div>
      </NForm>
    </NCard>
  </div>
</template>
