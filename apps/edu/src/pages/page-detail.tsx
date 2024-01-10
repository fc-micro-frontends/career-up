import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { selectAtom } from "jotai/utils";
import { coursesAtom } from "../atoms";
import { useAtomValue } from "jotai";
import CourseDetailItem from "../components/course-detail-item";
import useAuth0Client from "../hooks/use-auth0-client";
import { getCourseContents } from "../apis";
import { type CourseContentsType } from "../types";
import CourseContents from "../components/course-contents";
import CourseActions from "../components/course-actions";

const PageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const auth0Client = useAuth0Client();

  const [courseContents, setCourseContents] =
    useState<CourseContentsType | null>(null);

  const course = useAtomValue(
    useMemo(
      () =>
        selectAtom(coursesAtom, (courses) =>
          courses.find((course) => course.id === Number(id))
        ),
      [id]
    )
  );

  useEffect(() => {
    if (course === undefined) return;

    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const courseContents = await getCourseContents(token, course.id);

        setCourseContents(courseContents);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client, course]);

  if (course === undefined) {
    return null;
  }

  return (
    <>
      <CourseDetailItem {...course} />
      {courseContents !== null && <CourseContents {...courseContents} />}
      <CourseActions />
    </>
  );
};

export default PageDetail;
