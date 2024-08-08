import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


import api from "../config/api.json";
import { useLoading } from './useLoading';
import useToast from './useToast';
import { validateEmail } from '../utils/validation.js';
import { useNavigate } from 'react-router-dom';
import { getData, postData, postFormData, patchData, patchFormData, deleteData } from '../utils/apiCore.js';

export const useCRUD = () => {
    // const router = useNavigate()
    const { warn, error, success } = useToast();
    const queryClient = useQueryClient();
    // For Skeleton Loading
    const isLoading = useLoading();
    const [showLoader, setShowLoader] = useState(false);
    // Modals
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    // const getMutation = useMutation(({ url }) => getData({ url }));
    // const deleteMutation = useMutation(({ url }) => deleteData({ url }));
    const postMutation = useMutation({
        mutationFn: ({ url, body }) => postData({ url, body })
      })
    const deleteMutation = useMutation({
        mutationFn: ({ url, body }) => deleteData({ url })
      })
    const getMutation = useMutation({
        mutationFn: ({ url, body }) => getData({ url })
      })
    const patchMutation = useMutation({
        mutationFn: ({ url, body }) => patchData({ url, body })
      })
    // const postMutation = useMutation(({ url, body }) => postData({ url, body }));
    // const patchMutation = useMutation(({ url, body }) => patchData({ url, body }));

    const postFormMutation = useMutation(
        {
            mutationFn : ({ url, body }) => {
                const formData = new FormData();
                for (const [key, value] of Object.entries(body)) formData.append(key, value);
                if (body['special_attributes']?.length > 0) {
                    for (const key of body['special_attributes']) if (body[`${key}`]?.length > 0) for (const image of body[`${key}`]) formData.append(key, image)
                }
                return postFormData({ url, body: formData })
            }
        }
    )
    const patchFormMutation = useMutation(({ url, body }) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(body)) formData.append(key, value);
        if (body['special_attributes']?.length > 0) {
            for (const key of body['special_attributes']) if (body[`${key}`]?.length > 0) for (const image of body[`${key}`]) formData.append(key, image)
        }
        return patchFormData({ url, body: formData })
    });

    const queryResponse = ({ queryKey, url, enabled, refetchOnWindowFocus, refetchOnMount }) =>
        useQuery({
            queryKey,
            queryFn: () => getData({ url }),
            refetchOnWindowFocus: refetchOnWindowFocus ? refetchOnWindowFocus : false,
            refetchOnMount: refetchOnMount ? refetchOnMount : false,
            retry: 3,
            enabled
        });

    const validation = ({ body, requiredFields, extraValidation }) => {
        if (requiredFields?.length > 0)
            for (const attribute of requiredFields) {
                if (!body[`${attribute?.key}`]) {
                    warn(`Please enter ${attribute?.name ? attribute?.name : attribute?.key}.`);
                    return false;
                }
            }
        if (extraValidation?.length > 0)
            for (const single of extraValidation) {
                if (single === 'email')
                    if (!validateEmail(body.email)) {
                        warn("Please provide a correct email address!");
                        return false;
                    }
                if (single === "contactNumber") {
                    if (body?.contactNumber?.trim()?.length < 17) {
                        warn(`Contact number should contain at least 10 digits.`);
                        setShowLoader(false);
                        return false;
                    }
                }
                if (single === 'password')
                    if (body?.password?.length < 6) {
                        warn("Please provide at least 6 characters!");
                        return false;
                    }

                if (single === 'ccNum')
                    if (body?.ccNum?.trim().length < 16) {
                        warn(`Card number should be at least 16 digit.`);
                        return false;
                    }
                if (single === 'ccExp')
                    if (!body?.ccExp?.includes('/')) {
                        warn('Expire date format should be 02/22.');
                        return false;
                    }
            }
        return true
    }

    // To post or patch
    const handlePOST = async ({ requiredFields, extraValidation, mutation, url, body }) => {
        if (validation({ body, requiredFields, extraValidation })) {
            setShowLoader(true);
            try {
                const response = await mutation.mutateAsync({ url, body })
                if (response?.token || response?.statusCode == 200 || response?.statusCode == 201) {
                    response?.message && success(response?.message);
                    return response;
                } else {
                    error(response?.message);
                    setShowLoader(false);
                }
            } catch (e) {
                console.log(e);
                error(e?.data?.message);
                setShowLoader(false);
            }
        }
    }

    const handleChange = ({ e: { target: { name, value } }, setValue }) => setValue((prev) => ({ ...prev, [name]: value }));

    // To fetch single data in update component
    const fetchDataInUseEffect = async ({ url, setForm, type }) => {
        setShowLoader(true);
        try {
            const response = await getMutation.mutateAsync({ url })
            if (response?.statusCode == 200) {
                if (Array.isArray(response?.data)) {
                    if (response?.data?.length > 0 && !type) setForm(response?.data?.[0]);
                    else if (response?.data?.length > 0 && type) setForm(response?.data);
                } else {
                    if (response?.data && !type) setForm(response?.data);
                    else if (response?.data && type) {
                        setForm(response?.data?.[0]);
                        if (type === 'address') localStorage.setItem('billingAddress', JSON.stringify(response?.data?.[0]))
                    }
                }
                setShowLoader(false);
            } else {
                error(response?.message);
                setShowLoader(false);
            }
        } catch (e) {
            error(e?.data?.message);
            setShowLoader(false);
        }
    }

    const openDeleteModal = (item) => {
        setSelectedItem(item);
        setDeleteModal(true);
    }
    const handleDELETEApi = async ({ url }) => {
        setShowLoader(true);
        try {
            const response = await deleteMutation.mutateAsync({ url })
            if (response?.statusCode == 200 || response?.statusCode == 201) {
                success(response?.message);
                return response;
            } else {
                error(response?.message);
                setShowLoader(false);
            }
        } catch (e) {
            error(e?.data?.message);
            setShowLoader(false);
        }
    }
    const openEditModal = (item) => {
        setSelectedItem(item);
        setEditModal(true);
    }
    return {
        queryResponse, getMutation, deleteMutation, postMutation, postFormMutation,
        patchMutation, patchFormMutation, queryClient,
        validation, handlePOST, showLoader, handleChange, setShowLoader, fetchDataInUseEffect, warn, success, api, isLoading,
        selectedItem, setSelectedItem, deleteModal, setDeleteModal, addModal, setAddModal, editModal, setEditModal, openDeleteModal, handleDELETEApi, openEditModal,
    }
}