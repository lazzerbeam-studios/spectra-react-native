import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ToastVariant = 'default' | 'success' | 'destructive';

type ToastRecord = {
  id: number;
  title: string;
  description?: string;
  duration: number;
  variant: ToastVariant;
};

let toasts: ToastRecord[] = [];
let listeners: (() => void)[] = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => { listeners = listeners.filter(l => l !== listener); };
}

function addToast(title: string, variant: ToastVariant = 'default', duration = 6000, description?: string) {
  const id = Date.now() + Math.random();
  toasts = [...toasts, { id, title, description, variant, duration }];
  listeners.forEach(l => l());
  if (duration > 0) setTimeout(() => removeToast(id), duration);
}

function removeToast(id: number) {
  const next = toasts.filter(toast => toast.id !== id);
  if (next.length !== toasts.length) {
    toasts = next;
    listeners.forEach(l => l());
  }
}

function Toast() {
  const showToast = (title: string, options?: { variant?: ToastVariant; duration?: number; description?: string }) => {
    addToast(title, options?.variant ?? 'default', options?.duration ?? 6000, options?.description);
  };
  return { showToast };
}

const ToastHost: React.FC = () => {
  const [current, setCurrent] = useState<ToastRecord[]>(toasts);
  const insets = useSafeAreaInsets();

  useEffect(() => subscribe(() => setCurrent([...toasts])), []);
  if (current.length === 0) return null;

  const getToastIcon = (variant: ToastVariant) => {
    switch (variant) {
      case 'success':
        return 'checkmark-circle';
      case 'destructive':
        return 'alert-circle';
      default:
        return 'information-circle';
    }
  };

  const getToastStyles = (variant: ToastVariant) => {
    switch (variant) {
      case 'success':
        return {
          container: 'bg-green-50 border-2 border-green-200',
          text: 'text-green-800',
          icon: 'text-green-600',
        };
      case 'destructive':
        return {
          container: 'bg-red-50 border-2 border-red-200',
          text: 'text-red-800',
          icon: 'text-red-600',
        };
      default:
        return {
          container: 'bg-blue-50 border-2 border-blue-200',
          text: 'text-blue-800',
          icon: 'text-blue-600',
        };
    }
  };

  return (
    <View pointerEvents='box-none' className='absolute w-full px-4 sm:w-1/3' style={[styles.host, { top: insets.top + 20 }]}>
      <View pointerEvents='box-none' className='w-full items-stretch gap-2'>
        {current.map((toast) => {
          const iconVariant = getToastIcon(toast.variant);
          const stylesVariant = getToastStyles(toast.variant);
          return (
            <Pressable key={toast.id} onPress={() => removeToast(toast.id)} className='pb-4'>
              <View className={`rounded-lg p-4 flex-row items-start gap-3 border-1 ${stylesVariant.container}`}>
                <Ionicons name={iconVariant as any} size={20} className={stylesVariant.icon} />
                <View className='flex-1'>
                  <Text className={`font-semibold text-lg ${stylesVariant.text}`} style={styles.title}>
                    {toast.title}
                  </Text>
                  {toast.description && (
                    <Text className={`mt-1 ${stylesVariant.text}`}>
                      {toast.description}
                    </Text>
                  )}
                </View>
                <Ionicons name='close' size={20} className={stylesVariant.icon} />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export { Toast, ToastHost };
export type { ToastVariant, ToastRecord };

const styles = StyleSheet.create({
  host: {
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
  title: {
    marginTop: -3,
  },
});
